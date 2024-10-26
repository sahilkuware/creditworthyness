import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditScoreForm } from "@/components/CreditScoreForm"

export default function Models() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI Models</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Economic Growth Predictor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Predicts economic growth based on various factors.</p>
            <Button>Run Model</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Investment Opportunity Analyzer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Analyzes potential investment opportunities in the region.</p>
            <Button>Run Model</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Workforce Demand Forecaster</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Forecasts workforce demand in various sectors.</p>
            <Button>Run Model</Button>
          </CardContent>
        </Card>
        <CreditScoreForm />
      </div>
    </div>
  )
}