import { Card, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ServiceCard() {
  return (
    <Card className="group relative overflow-hidden">
      {/* ...existing code... */}
      <CardFooter className="p-4 flex flex-wrap gap-2 justify-center md:justify-start">
        <Button
          variant="default"
          size="sm"
          className="w-full md:w-auto"
          asChild
        >
          <Link href="/services/[slug]">Learn More</Link>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="w-full md:w-auto"
          asChild
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}