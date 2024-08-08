'use client';

interface ErrorProps {
  error: {
    message: string
  }
}

export default function FilterError({ error }: ErrorProps) {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </div>
  )
}