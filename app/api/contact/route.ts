import { NextResponse } from "next/server"
import { Resend } from "resend"

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const rateLimitHits = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitHits.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  entry.count += 1
  return entry.count > RATE_LIMIT_MAX_REQUESTS
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Muitas requisições. Tente novamente mais tarde." }, { status: 429 })
    }

    const body = await request.json()

    if (
      typeof body.name !== "string" ||
      typeof body.email !== "string" ||
      typeof body.subject !== "string" ||
      typeof body.message !== "string" ||
      !body.name.trim() ||
      !body.email.trim() ||
      !body.subject.trim() ||
      !body.message.trim()
    ) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes" }, { status: 400 })
    }

    const name: string = body.name
    const email: string = body.email
    const subject: string = body.subject
    const message: string = body.message
    const company: string | undefined = typeof body.company === "string" ? body.company : undefined

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Formato de e-mail inválido" }, { status: 400 })
    }

    const toEmail = process.env.CONTACT_EMAIL_TO || "dbcfilho01@gmail.com"
    const fromEmail = process.env.EMAIL_FROM || "onboarding@resend.dev"

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeCompany = company ? escapeHtml(company) : ""
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message)
    const headerSafeSubject = String(subject).replace(/[\r\n]+/g, " ")

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Contato pelo Portfólio: ${headerSafeSubject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #2563eb; margin-bottom: 5px; }
              .value { color: #374151; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">Nova Mensagem de Contato</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Recebida pelo seu portfólio</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Nome:</div>
                  <div class="value">${safeName}</div>
                </div>
                <div class="field">
                  <div class="label">E-mail:</div>
                  <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
                </div>
                ${
                  safeCompany
                    ? `
                <div class="field">
                  <div class="label">Empresa:</div>
                  <div class="value">${safeCompany}</div>
                </div>
                `
                    : ""
                }
                <div class="field">
                  <div class="label">Assunto:</div>
                  <div class="value">${safeSubject}</div>
                </div>
                <div class="field">
                  <div class="label">Mensagem:</div>
                  <div class="value" style="white-space: pre-wrap;">${safeMessage}</div>
                </div>
                <div class="footer">
                  <p>Esta mensagem foi enviada pelo formulário de contato do seu portfólio em ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })} (horário de Brasília).</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ message: "Mensagem enviada com sucesso" }, { status: 200 })
  } catch (error) {
    console.error("Erro no formulário de contato:", error)
    return NextResponse.json({ error: "Falha ao processar o envio do formulário" }, { status: 500 })
  }
}
