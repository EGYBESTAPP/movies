import React, { useState, useEffect } from "react";
import { Adb } from '@yume-chan/adb';
import AdbWebCredentialStore from '@yume-chan/adb-credential-web';
import AdbWebUsbBackend from '@yume-chan/adb-backend-webusb';

import CompatBtn from "./compatbtn";

import {MdAdb} from "react-icons/md"

const isBrowser = typeof window !== "undefined"

const CredentialStore = new AdbWebCredentialStore();

const AdbConnect = () => {
    const [status, setStatus] = useState("disconnected")
    const [supported, setSupported] = useState(true);

    useEffect(() => {
        if (!isBrowser) return;
        setSupported(AdbWebUsbBackend.isSupported())
    }, [])

    function connect() {
        if (!isBrowser) return;
        AdbWebUsbBackend.requestDevice()
            .then(req => {
                setStatus(`loading/Connecting to ${req.name}`)
                req.connect()
                    .then(conn => {
                        setStatus(`loading/Authenticating ${req.serial}`)
                        Adb.authenticate(conn, CredentialStore, undefined)
                            .then(dev => {
                                setStatus(`connected/${dev.device}`)
                                window.AdbConnection = dev
                            })
                            .catch(err => {
                                setStatus(`error/${err}`)
                            })
                    })
            })
    }

    if (!supported) return <></>

    let color
    if (status.startsWith("connected")) {
        color = "alert-success"
    } else if (status.startsWith("error")) {
        color = "alert-error"
    } else if (status.startsWith("loading")) {
        color = "alert-info"
    } else {
        color = ""
    }

    return <div class={`alert shadow-lg w-full mx-10 md:w-2/3 mb-5 ${color}`}>
        <div>
            <MdAdb />
            <div>
                <h3 class="font-bold">Connect to the device via ADB (via USB)</h3>
                {!status.startsWith("error") &&
                    <div class="text-xs">Useful if you do not have a web browser on your device.</div>
                }
                {status.startsWith("error") &&
                    <div class="text-xs">Failed to connect. ${status.split("/").at(1)}</div>
                }
            </div>
        </div>
        <div class="flex-none">
            {status === "disconnected" &&
                <CompatBtn className="btn-sm btn-primary" onClick={connect}>Connect</CompatBtn>
            }
            {status.startsWith("loading") &&
                <button class="btn btn-sm loading btn-info no-animation">{status.split("/").at(1) || "Loading"}</button>
            }
            {status.startsWith("connected") &&
                <button class="btn btn-sm btn-success no-animation">Connected to {status.split("/").at(1) || "device"}</button>
            }
        </div>
    </div>
}

export default AdbConnect