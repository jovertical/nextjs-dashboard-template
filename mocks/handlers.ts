import { HttpResponse, http } from 'msw'

type User = {
  firstName: string
  lastName: string
}

export const handlers = [
  http.get<never, never, User[]>('https://api.example.com/users', () => {
    return HttpResponse.json([
      {
        firstName: 'Sarah',
        lastName: 'Maverick',
      },
    ])
  }),
]
