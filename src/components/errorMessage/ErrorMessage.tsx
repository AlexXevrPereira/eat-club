import React from 'react'
import type { ErrorMessageProps } from './types.ts'

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="flex items-center gap-3 bg-red-100 text-red-700 p-4 rounded border border-red-300 shadow-sm">
    <span className="text-2xl" role="img" aria-label="Sad face">
      😢
    </span>
    <div>
      <strong className="block mb-1">
        Oops! Something went wrong. Try again maybe?
      </strong>
      <span>{message}</span>
    </div>
  </div>
)

export default ErrorMessage
