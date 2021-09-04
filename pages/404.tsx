import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      console.log('dipanggil setelah 2 detik');
      router.push('blog');
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className="title-not-found">Ooops... </h1>
      <h1 className="title-not-found">Halaman yang anda cari tidak adaa...</h1>
    </div>
  );
}
