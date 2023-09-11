import { useRouter } from 'next/router';

export default function ShowCard() {
  const router = useRouter();

  return(
    <main className={'font-serif'}>
      <div className='h-screen w-screen'>
        <div className='absolute inset-0 flex flex-col justify-center items-center'>
          <div className='bg-white w-1/3 h-4/5'>
            <h2
              className='text-6xl font-bold [writing-mode:vertical-rl] absolute inset-0 flex flex-col justify-center items-center'
            >
              {router.query.name}　様
            </h2>
          </div>
        </div>
      </div>
    </main>
  )
}
