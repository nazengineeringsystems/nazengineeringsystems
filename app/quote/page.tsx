import { redirect } from 'next/navigation'

export default function QuotePage() {
  // Redirect to contact page with Get Quote source
  redirect('/contact?source=get-quote&timestamp=' + Date.now())
}
