"use client"

import { Share } from "@capacitor/share"
import { useState } from "react"
import { CiShare2 } from "react-icons/ci"
import { IoMdAdd, IoMdClose } from "react-icons/io"
import { PiFolderOpenLight } from "react-icons/pi"

export default function Tasks() {
    const [tasks, setTasks] = useState<any>([])
    const [isDialogOpen, setIsDialogOpen] = useState<any>(false)

    const onSubmitForm = (e) => {
        e.preventDefault()
        const task = e.target['task'].value
        if (task && task.trim() !== '') {
            setTasks(prev => [...prev, {
                id: Math.random(),
                title: task,
            }])
            e.target.reset()
            setIsDialogOpen(false)
        }
        else {
            alert('Task is empty')
        }
    }
    const onDeleteTask = (taskId) => {
        setTasks(prev => prev.filter(task => task.id !== taskId))
    }
    const onShareTask = (taskTitle: string) => {
        Share.share({
            text: `Task : ${taskTitle}`,
        })
    }

    return (
        <div className="relative">
            <div className="flex flex-col gap-2">
                {
                    tasks.map((task) => (
                        <div className="border flex justify-between items-center border-black/20 rounded p-3">
                            <span className="text-md font-medium">{task.title}</span>
                            <div className="flex flex-col gap-1 ">
                                <button onClick={() => onDeleteTask(task.id)}>
                                    <IoMdClose size={20} className="text-red-400" />
                                </button>
                                <button onClick={() => onShareTask(task.title)}>
                                    <CiShare2 size={20} className="text-stone-400" />
                                </button>
                            </div>
                        </div>
                    ))
                }
                {
                    tasks.length === 0 && (
                        <div className="flex items-center gap-5 flex-col justify-center rounded-md text-sky-400 p-8">
                            <PiFolderOpenLight className="animate-bounce" size={100} />
                            <h1 className="text-xl font-bold text-center">your tasks is empty add one</h1>
                        </div>
                    )
                }
            </div>
            <button onClick={() => setIsDialogOpen(true)} className="bg-sky-400 rounded-full text-white p-1 fixed bottom-8 right-8">
                <IoMdAdd size={40} className="" />
            </button>
            {
                isDialogOpen && (
                    <div className="fixed z-[10000] top-0 left-0 w-full h-full flex items-center justify-center ">
                        <div onClick={() => setIsDialogOpen(false)} className="bg-black/30 h-full w-full left-0 top-0 absolute" />
                        <div className="bg-white w-3/4 p-2 rounded-md z-[100000]">
                            <h1 className="text-sm font-medium mb-1">Create task</h1>
                            <form onSubmit={onSubmitForm} className="flex items-start gap-5 flex-col">
                                <input id={'task'} placeholder="Task" className="border rounded-2 p-2 focus:outline-none" />
                                <button type="submit" className="bg-sky-400 text-white w-full rounded-md p-2">Create</button>
                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
