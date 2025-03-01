import dynamic from "next/dynamic"

const DynamicHomeContent = dynamic(() => import("@/components/HomeContent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return <DynamicHomeContent />
}

