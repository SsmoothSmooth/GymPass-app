import { FastifyRequest, FastifyReply } from 'fastify'
import { makeGetUserMetricUseCase } from '@/use-case/factories/make-get-user-metrics-use-case'

export async function metrics(request: FastifyRequest, reply: FastifyReply) {
  const getUserMetricUseCase = makeGetUserMetricUseCase()

  const { checkInsCount } = await getUserMetricUseCase.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send({
    checkInsCount,
  })
}
