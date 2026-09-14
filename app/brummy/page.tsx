import BrummyHeader from "@/components/brummy/brummy-header"
import BrummyHero from "@/components/brummy/brummy-hero"
import BrummyStory from "@/components/brummy/brummy-story"
import BrummyBuild from "@/components/brummy/brummy-build"
import BrummyHorizon from "@/components/brummy/brummy-horizon"
import BrummyPhilosophy from "@/components/brummy/brummy-philosophy"
import BrummyStatus from "@/components/brummy/brummy-status"
import BrummySource from "@/components/brummy/brummy-source"

export default function BrummyPage() {
  return (
    <>
      <BrummyHeader />
      <main id="bx-content">
        <BrummyHero />
        <BrummyStory />
        <BrummyBuild />
        <BrummyHorizon />
        <BrummyPhilosophy />
        <BrummyStatus />
        <BrummySource />
      </main>
    </>
  )
}
