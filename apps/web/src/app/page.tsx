import { Button } from "@repo/ui";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
              Next.js Monorepo Boilerplate
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A modern monorepo setup with Next.js 15, React 19, shadcn/ui, and
              Storybook
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Next.js 15</CardTitle>
                <CardDescription>
                  Latest version with App Router and React 19 support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Learn More</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>shadcn/ui</CardTitle>
                <CardDescription>
                  Beautiful, accessible components built with Radix UI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary">Explore Components</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Storybook</CardTitle>
                <CardDescription>
                  Build and test components in isolation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">View Stories</Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Start Building</Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
