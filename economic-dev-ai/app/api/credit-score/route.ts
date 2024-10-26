import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  // Ensure required fields are in the input
  const requiredFields = ["income", "dependents", "expenses", "employment_stability", "credit_history"];
  if (!requiredFields.every(field => field in body)) {
    return NextResponse.json({ error: "Missing one or more required fields" }, { status: 400 });
  }

  try {
    // Make a request to your Python backend
    const response = await fetch('http://localhost:5000/credit_score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch credit score');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}