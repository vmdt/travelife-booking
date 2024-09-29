import api, { auth, handleError } from 'API'
import { PLATFORM } from 'enums/common'
import { ITourPagination, ISearch, ITour, IAllTourPagination } from 'interfaces/tour'
import get from 'lodash/get'

const TOUR_URL = '/api/v1/tours'

export async function getAllTours(filter = ''): Promise<IAllTourPagination> {
  try {
    const response = await api.get(`${TOUR_URL}/all${filter}`)
    return response.data.metadata
  } catch (error) {
    handleError(error as Error, 'API/tour', 'getAllTours')
    const errorMessage: string = get(error, 'data.error.message', '') || JSON.stringify(error)
    throw new Error(errorMessage)
  }
}
