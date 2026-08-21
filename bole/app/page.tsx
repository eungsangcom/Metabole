import { HealthStatus } from "@/components/health-status";
import { SampleStatus } from "@/components/sample-status";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col gap-8 px-5 py-12">
      <header className="space-y-2">
        <p className="text-xs tracking-[0.28em] text-primary uppercase">Metabole</p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">bole</h1>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          Next.js 프론트엔드 스캐폴딩. 백엔드 <code className="text-primary">meta</code> 와
          same-origin 프록시 <code className="text-primary">/backend-api</code> 로 연결됩니다.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        <HealthStatus />
        <SampleStatus />
      </section>
    </main>
  );
}
