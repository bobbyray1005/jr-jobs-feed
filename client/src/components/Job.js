import React from 'react';


export default function Job({job}) {
    return (
        <div className={'job'}>
            {job.title}
            {job.company}
        </div>
    )
}
