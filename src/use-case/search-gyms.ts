import { Gym } from '@prisma/client'
import { GymRepository } from '@/repositories/gyms-repository'

interface SearchUseCaseRequest {
  query: string
  page: number
}

interface SearchUseCaseResponse {
  gyms: Gym[]
}

export class SearchUseCase {
  constructor(private gymRepository: GymRepository) {}

  async execute({
    query,
    page,
  }: SearchUseCaseRequest): Promise<SearchUseCaseResponse> {
    const gyms = await this.gymRepository.searchMany(query, page)

    return {
      gyms,
    }
  }
}
