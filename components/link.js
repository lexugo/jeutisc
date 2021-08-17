import React from 'react'
import Anchor from 'next/link'

export default function Link({ href, children }) {
    return <Anchor href={href} shallow><a>{ children }</a></Anchor>
}