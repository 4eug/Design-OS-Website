import React from 'react'
import { Button } from './button'
import { FigmaIcon } from './icons/figma'

export default function header() {
  return (
    <header>
        <div className="px-4 mx-auto  max-w-7xl">
            <div className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex-shrink-0">
                    <a href="#" title="" className="flex">
                        logo
                    </a>
                </div>

                <Button size='medium'
                href="https://www.figma.com/community/file/1424003734348021920/design-os"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <FigmaIcon/>
                    Preview</Button>
            </div>
        </div>
    </header>
  )
}
