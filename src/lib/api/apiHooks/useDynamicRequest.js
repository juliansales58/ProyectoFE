import axios from 'axios'

const useDynamicRequest = () => {
  const request = async (baseUrl, queryUrl, method = 'post', data = null, options = {}) => {
    const config = {
      method,
      url: queryUrl,
      baseURL: baseUrl,
      ...options,
    }

    if (data) {
      config.data = data
    }

    try {
      const response = await axios(config)
      return response?.data
    } catch (error) {
      throw error
    }
  }

  return request
}

export default useDynamicRequest
