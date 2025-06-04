import React, { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Menu,
  X,
  Calculator,
  DollarSign,
  Gauge,
  Award,
  Clock,
  Smartphone,
  Sun,
  Moon,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Building,
  Heart,
  Rocket,
  MessageCircle,
  Phone,
  LineChart,
  PieChart,
  Activity,
  Percent,
  Plus
} from 'lucide-react'
import './App.css'
import logoImage from './assets/scala-uai-logo.png'

// Componente Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="Scala Uai" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#planos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              Planos
            </a>
            <a href="#sobre" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
              Contato
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="hidden sm:inline-flex"
            >
              Fale Conosco
            </Button>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-2">
              <a href="#planos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Planos
              </a>
              <a href="#sobre" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Contato
              </a>
              <Button variant="outline" size="sm" className="mx-3 mt-2">
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// Componente Hero
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Marketing Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Sem Complicação
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Resultados mensuráveis, sem contratos longos e com garantia de performance
            em 30 dias.
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 italic">
            Feito para quem movimenta o Brasil
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Rocket className="mr-2 h-5 w-5" />
              Começar Agora
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente Pricing
const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAdvancedMode, setIsAdvancedMode] = useState(false)

  const openModal = (plan) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPlan(null)
  }

  const plans = [
    {
      name: "Starter",
      price: 197,
      description: "Comece a construir sua presença digital com estratégias eficientes",
      features: [
        "1 campanha ativa",
        "1 criativo por mês", 
        "Relatórios mensais",
        "Suporte por email"
      ],
      badge: "Básico",
      badgeColor: "bg-green-100 text-green-800",
      buttonText: "Garantir Resultados",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      name: "Aceleração", 
      price: 297,
      description: "Dobre seu ROI com estratégias avançadas e campanhas de alta conversão",
      features: [
        "2 campanhas ativas",
        "3 criativos por mês",
        "Estratégia de conversão",
        "Relatórios mensais", 
        "Suporte prioritário"
      ],
      badge: "Recomendado",
      badgeColor: "bg-blue-100 text-blue-800",
      buttonText: "Acelerar Crescimento",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      popular: true
    },
    {
      name: "Crescimento Exponencial",
      price: 397, 
      description: "Multiplique seus resultados com estratégias omnichannel e otimização contínua",
      features: [
        "4 campanhas ativas",
        "5 criativos por mês",
        "Sistema completo de funil",
        "Estratégia omnichannel",
        "Relatórios quinzenais",
        "Suporte via WhatsApp"
      ],
      badge: "Premium", 
      badgeColor: "bg-purple-100 text-purple-800",
      buttonText: "Escalar Negócio",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    }
  ]

  return (
    <section id="planos" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Escolha o Plano Ideal
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Planos flexíveis para cada momento do seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''} hover:shadow-lg transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1">
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge className={plan.badgeColor}>
                    {plan.badge}
                  </Badge>
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </CardTitle>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold text-purple-600">
                    12x de R$ {plan.price}
                  </span>
                </div>
                
                <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.buttonColor} text-white`}
                  onClick={() => openModal(plan)}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Building className="mr-2 h-5 w-5" />
            Precisa de algo personalizado? Fale conosco
          </Button>
        </div>
        
        {/* Modal de Contratação */}
        <ContractModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedPlan={selectedPlan}
          isAdvancedMode={isAdvancedMode}
          setIsAdvancedMode={setIsAdvancedMode}
        />
      </div>
    </section>
  )
}

// Componente Modal de Contratação Simplificado
const ContractModal = ({ isOpen, onClose, selectedPlan, isAdvancedMode, setIsAdvancedMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    // Upsells recomendados
    advancedReports: false,
    unlimitedCreatives: false, 
    expressSetup: false,
    strategicMentoring: false,
    aiOptimization: false,
    multiPlatform: false,
    whiteLabel: false,
    dedicatedManager: false,
    customDashboard: false
  })

  if (!isOpen || !selectedPlan) return null

  const basePrice = selectedPlan.price

  // Sistema de Recomendação Inteligente
  const getRecommendedUpsells = (planName) => {
    const recommendations = {
      'Starter': [
        { key: 'advancedReports', name: 'Relatórios Avançados', price: 147, description: 'Dashboards personalizados e análises preditivas' },
        { key: 'unlimitedCreatives', name: 'Criativos Ilimitados', price: 197, description: 'Design de anúncios profissionais ilimitados' },
        { key: 'expressSetup', name: 'Setup Express', price: 297, description: 'Implementação em 24h com primeira campanha grátis', oneTime: true }
      ],
      'Aceleração': [
        { key: 'strategicMentoring', name: 'Mentoria Estratégica', price: 497, description: '2 calls mensais com especialista' },
        { key: 'aiOptimization', name: 'Otimização IA', price: 177, description: 'Algoritmos de machine learning para ROI +30%' },
        { key: 'multiPlatform', name: 'Multi-Plataforma', price: 127, description: 'TikTok Ads + LinkedIn Ads integrados' }
      ],
      'Crescimento Exponencial': [
        { key: 'whiteLabel', name: 'White Label', price: 397, description: 'Solução com sua marca para revenda' },
        { key: 'dedicatedManager', name: 'Gerente Dedicado', price: 597, description: 'Gerente exclusivo para sua conta' },
        { key: 'customDashboard', name: 'Dashboard Personalizado', price: 127, description: 'Interface customizada para sua empresa' }
      ]
    }
    return recommendations[planName] || recommendations['Starter']
  }

  const recommendedUpsells = getRecommendedUpsells(selectedPlan.name)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Formulário enviado! (Integração com Yampi será implementada)')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Contratar Plano {selectedPlan.name}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dados Básicos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
              <div>
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Nome da sua empresa"
                  required
                />
              </div>
            </div>

            {/* Upsells Recomendados */}
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  🎯 Recomendado para {selectedPlan.name}
                </h4>
                
                <div className="space-y-3">
                  {recommendedUpsells.map((upsell) => (
                    <div key={upsell.key} className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg border">
                      <input
                        type="checkbox"
                        id={upsell.key}
                        name={upsell.key}
                        checked={formData[upsell.key]}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <label htmlFor={upsell.key} className="font-medium text-gray-900 dark:text-white cursor-pointer">
                            {upsell.name}
                          </label>
                          <span className="text-lg font-bold text-blue-600">
                            {upsell.oneTime ? `R$ ${upsell.price}` : `+R$ ${upsell.price}/mês`}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {upsell.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resumo */}
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">💰 Resumo do Pedido</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Plano {selectedPlan.name}:</span>
                  <span>12x de R$ {basePrice}</span>
                </div>
                {recommendedUpsells.map((upsell) => (
                  formData[upsell.key] && (
                    <div key={upsell.key} className="flex justify-between text-green-600">
                      <span>+ {upsell.name}:</span>
                      <span>{upsell.oneTime ? `R$ ${upsell.price}` : `+R$ ${upsell.price}/mês`}</span>
                    </div>
                  )
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Solicitar contratação
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

// Componente Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img 
            src={logoImage} 
            alt="Scala Uai" 
            className="h-12 w-auto mx-auto mb-4 filter brightness-0 invert"
          />
          <p className="text-gray-400 mb-4">
            Agência de tráfego pago especializada em PMEs
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Componente Principal
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <HeroSection />
      <PricingSection />
      <Footer />
    </div>
  )
}

export default App

