'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-pastel to-gray-bg">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 container">
        <h1 className="text-2xl font-bold text-pink-primary">SintoniaFit</h1>
        <div className="space-x-4">
          <Link href="/auth" className="btn-primary">
            Entrar
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-text mb-4">
          Transformção Corporal Inteligente
        </h2>
        <p className="text-xl text-gray-text mb-8 max-w-2xl mx-auto">
          Seu companheiro inteligente para uma jornada de emagrecimento saudável com Mounjaro.
          Exercícios personalizados, nutrição adaptada e suporte 24/7.
        </p>
        <Link href="/auth" className="btn-primary text-lg py-3 px-8 inline-block">
          Começar Gratuitamente
        </Link>
      </section>

      {/* Features */}
      <section className="container py-16">
        <h3 className="text-3xl font-bold text-gray-text text-center mb-12">Recursos Principais</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="text-4xl mb-4">🏋️</div>
            <h4 className="text-xl font-bold text-pink-primary mb-2">Exercícios Personalizados</h4>
            <p>Planos de exercícios para casa adaptados à sua capacidade atual</p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-4">🍽️</div>
            <h4 className="text-xl font-bold text-pink-primary mb-2">Nutrição Inteligente</h4>
            <p>Planos alimentares criados com base nos ingredientes que você tem</p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-4">📊</div>
            <h4 className="text-xl font-bold text-pink-primary mb-2">Progresso Monitorado</h4>
            <p>Acompanhe seu peso e veja gráficos de progresso semanais</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-pink-light mt-16 py-8 text-center text-gray-text">
        <p>&copy; 2024 SintoniaFit. 100% Gratuito e Open Source.</p>
      </footer>
    </div>
  );
}
