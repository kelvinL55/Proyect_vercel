'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Heart, 
  ThumbsUp, 
  Settings,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Zap,
  Shield,
  Sparkles
} from 'lucide-react';

export default function ComponentsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Componentes UI</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Biblioteca completa de componentes modernos y accesibles construidos con Radix UI y Tailwind CSS
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {/* Buttons Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Botones</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Variantes</h3>
                    <div className="space-y-2">
                      <Button>Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">Tamaños</h3>
                    <div className="space-y-2">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                      <Button size="icon"><Star className="w-4 h-4" /></Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">Estados</h3>
                    <div className="space-y-2">
                      <Button>Normal</Button>
                      <Button disabled>Disabled</Button>
                      <Button className="group">
                        Hover Effect
                        <Zap className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cards Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Tarjetas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Seguridad
                  </CardTitle>
                  <CardDescription>
                    Protección avanzada para tus datos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Implementamos las mejores prácticas de seguridad para mantener tu información protegida.
                  </p>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Más información
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Rendimiento
                  </CardTitle>
                  <CardDescription>
                    Optimizado para velocidad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Nuestra plataforma está diseñada para ofrecer el mejor rendimiento posible.
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver métricas
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Innovación
                  </CardTitle>
                  <CardDescription>
                    Tecnología de vanguardia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Utilizamos las últimas tecnologías para crear experiencias únicas.
                  </p>
                  <Button variant="ghost" className="w-full">
                    Explorar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Form Elements Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Elementos de Formulario</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Input de texto</label>
                      <Input placeholder="Escribe algo aquí..." />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Textarea</label>
                      <Textarea placeholder="Escribe un mensaje más largo..." />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Select</label>
                      <Select value={selectedValue} onValueChange={setSelectedValue}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Opción 1</SelectItem>
                          <SelectItem value="option2">Opción 2</SelectItem>
                          <SelectItem value="option3">Opción 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Badges</label>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Avatares</label>
                      <div className="flex gap-2">
                        <Avatar>
                          <AvatarImage src="/placeholder-avatar.jpg" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarFallback>
                            <User className="w-4 h-4" />
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Interactive Components Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Componentes Interactivos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Hover Card</CardTitle>
                  <CardDescription>
                    Pasa el mouse sobre el botón para ver el contenido
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Información adicional</h4>
                        <p className="text-sm text-muted-foreground">
                          Este es un ejemplo de hover card que muestra contenido adicional cuando pasas el mouse.
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tooltip</CardTitle>
                  <CardDescription>
                    Pasa el mouse sobre el botón para ver el tooltip
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Tooltip me</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Este es un tooltip informativo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Collapsible</CardTitle>
                  <CardDescription>
                    Haz clic para expandir/contraer el contenido
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        {isOpen ? 'Contraer' : 'Expandir'}
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <div className="rounded-md border p-4">
                        <p className="text-sm text-muted-foreground">
                          Este es el contenido que se puede expandir y contraer. 
                          Es útil para mostrar información adicional sin ocupar mucho espacio.
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Acciones Rápidas</CardTitle>
                  <CardDescription>
                    Botones con diferentes acciones
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Heart className="w-4 h-4 mr-1" />
                      Like
                    </Button>
                    <Button size="sm" variant="outline">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      Thumbs Up
                    </Button>
                    <Button size="sm" variant="outline">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Stats Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Estadísticas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Componentes</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Accesible</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">TypeScript</div>
                  <div className="text-sm text-muted-foreground">Tipado</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Modern</div>
                  <div className="text-sm text-muted-foreground">Diseño</div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

