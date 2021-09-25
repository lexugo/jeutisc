import React from 'react'
import Anchor from 'next/link'

export default function Link({ href, children, ...props }) {
    return <Anchor href={href} shallow><a {...props}>{ children }</a></Anchor>
}
