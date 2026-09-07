import React from 'react'
import { Clock } from 'lucide-react'

const Card = (props) => {
  return (
    <div className="max-w-sm rounded-2xl bg-white p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
      <div className="relative mb-3 overflow-hidden rounded-xl bg-slate-100">
        <img onClick={()=> window.open(props.url, '_blank', 'noopener,noreferrer')}
          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105" 
          src={props.image} 
          alt={props.alt || props.courseName} 
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex flex-col items-end">
          {props.medium && (
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
              {props.medium}
            </span>
          )}
          <div className="flex items-center text-xs text-slate-500 font-medium">
            <Clock className="mr-1.5 h-3.5 w-3.5 text-slate-400" />
            <span>8 weeks</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 line-clamp-1 hover:text-indigo-600 transition-colors">
          {props.courseName}
        </h3>

        <p className="text-sm text-slate-600 line-clamp-2 leading-tight">
          {props.desc}
        </p>

        <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-2">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Price</span>
            <span className="text-lg font-extrabold text-slate-900 leading-none">
              Rs. {props.price}
            </span>
          </div>
          
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 active:scale-95 transition-all" 
            onClick={()=> window.open(props.url, '_blank', 'noopener,noreferrer')}
            >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card