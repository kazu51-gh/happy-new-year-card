import { useState } from 'react';
import { basePath } from '../../next.config'

const BASE_PATH = basePath ? basePath : "";

export default function Home() {
  const [userName, setUserName] = useState('');
  return (
    <main
      className={'font-serif'}
    >
      <div className='h-screen w-screen'>
        <div className='absolute inset-0 flex flex-col justify-center items-center'>
          <h2
            className='text-2xl font-bold text-center my-4 w-1/4'
          >
            氏名を入力してください...
          </h2>
          <input
            className='text-2xl text-center py-1.5 w-1/4 rounded'
            type='text'
            onChange={(e) => setUserName(e.target.value)}
            placeholder='(例) 田中 太郎'
            value={userName}
          />
          <button
            className='text-1xl text-center bg-sky-200 hover:bg-sky-100 rounded px-4 py-2 my-4 w-1/5'
            onClick={() => console.log(userName)}
          >
            送信
          </button>
        </div>
      </div>
    </main>
  )
}
