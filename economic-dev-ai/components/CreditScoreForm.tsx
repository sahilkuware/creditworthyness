'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Add this interface above the component
interface CreditScoreResult {
  credit_score: number;
  recommendations: string[];
}

export function CreditScoreForm() {
  const [formData, setFormData] = useState({
    income: '',
    dependents: '',
    expenses: '',
    employment_stability: '',
    credit_history: ''
  });
  const [result, setResult] = useState<CreditScoreResult | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/credit-score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Credit Score Prediction</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="income">Income</Label>
              <Input id="income" name="income" value={formData.income} onChange={handleInputChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="dependents">Dependents</Label>
              <Input id="dependents" name="dependents" value={formData.dependents} onChange={handleInputChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="expenses">Monthly Expenses</Label>
              <Input id="expenses" name="expenses" value={formData.expenses} onChange={handleInputChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="employment_stability">Employment Stability (years)</Label>
              <Input id="employment_stability" name="employment_stability" value={formData.employment_stability} onChange={handleInputChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="credit_history">Credit History</Label>
              <Input id="credit_history" name="credit_history" value={formData.credit_history} onChange={handleInputChange} />
            </div>
          </div>
          <CardFooter className="flex justify-between mt-4">
            <Button type="submit">Predict Credit Score</Button>
          </CardFooter>
        </form>
      </CardContent>
      {result && (
        <CardContent>
          <h3 className="font-bold">Result:</h3>
          <p>Credit Score: {result.credit_score}</p>
          <h4 className="font-semibold mt-2">Recommendations:</h4>
          <ul className="list-disc pl-5">
            {result.recommendations.map((rec: string, index: number) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}
