import dynamic from 'next/dynamic'

export const LazyMap = dynamic(() => import('./index'), { ssr: false })
