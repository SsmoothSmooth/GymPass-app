import { GetUserMetricUseCase } from '../get-user-metric'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeGetUserMetricUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new GetUserMetricUseCase(checkInsRepository)

  return useCase
}
