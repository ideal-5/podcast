import { useRouter } from 'vue-router'
import type { routerToConfig } from '@/type/router'
export default function () {
  const router = useRouter()

  function routerTo<T>({ path, name, query, isPush = true }: routerToConfig<T>) {
    if (query) {
      router[isPush ? 'push' : 'replace']({ [path ? 'path' : 'name']: path || name, query })
    } else {
      router[isPush ? 'push' : 'replace']({ [path ? 'path' : 'name']: path || name })
    }
  }

  return {
    routerTo
  }
}
