import React from 'react'
import { useRouter } from 'next/router'
import Apply from '@/components/hris/careers/apply/Apply'

export default function index() {
    const router = useRouter()
  return (
    <div>
        <Apply jobid={router.query.jobid}/>
    </div>
  )
}