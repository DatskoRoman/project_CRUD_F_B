import {useEffect, useState} from "react";

export default function Status(code) {
    let {status} = code
    let [statusBar, setStatus] = useState('ok')
    let [moving, setMoving] = useState('hide')

    useEffect(() => {
        if (status === 409) {
            setStatus('email already exist')
            setMoving('error')
        }
        if (status === 201) {
            setStatus('created!')
            setMoving('ok')
        }
        if (status === 202) {
            setStatus('saved!')
            setMoving('ok')
        }
        if (status === 400) {
            setStatus('invalid data!')
            setMoving('error')
        }
        if (status === 0) {
            setMoving('hide')
        }
        if (status === 1) {
            setStatus('wrong repeat password')
            setMoving('error')
        }
        if (status.message) {
            setStatus(status.message)
            setMoving('error')
        }
        if (status.message === "Deleted") {
            setStatus(status.message)
            setMoving('ok')
        }
    }, [status]);
    return (
        <div>
            <div id={moving}>
                {statusBar}
            </div>
        </div>
    )

}
