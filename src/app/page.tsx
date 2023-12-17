import Header from '@/Components/Layouts/Header'
import Hero from '@/Components/Widgets/Hero'
import CoreTracks from '@/Components/Widgets/coreTracks'
import Image from 'next/image'
import SpecializedTrack from '@/Components/Widgets/SpecializedTrack'
import CourseOutcome from '@/Components/Widgets/CourseOutcome'

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <CoreTracks/>
        <SpecializedTrack/>
        <CourseOutcome/>
        
      </main>
    </>
  )
}
