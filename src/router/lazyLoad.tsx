import { Suspense } from 'react'

function lazyLoad(Component: React.LazyExoticComponent<() => JSX.Element>) {
  return (
    <Suspense>
      <Component />
    </Suspense>
  )
}

export default lazyLoad
