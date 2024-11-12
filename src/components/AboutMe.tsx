import { Button } from "@/components/ui/button"


const AboutMe = () => {
  return (
    <div>
        <div className="w-40 flex flex-col m-10 gap-8">
            <h1>Ahoj, som Váš Projektový manažér</h1>
            <Button variant="outline" size="lg">Button</Button>
            <Button variant="default" size="lg" className="bg-cyan-800 hover:bg-cyan-900">Button</Button>
        </div>
    </div>
  )
}

export default AboutMe