import { Card, CardContent } from './ui/card';

type StatProps = {
  value: string;
  label: string;
}

function StatCard({ value, label }: StatProps) {
  return (
    <Card className="bg-white shadow-lg border-none">
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">{value}</h3>
        <p className="text-gray-500">{label}</p>
      </CardContent>
    </Card>
  );
}

export default function StatsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard value="95%" label="Retention Rate" />
          <StatCard value="200+" label="Professionals Placed" />
          <StatCard value="88" label="NPS" />
        </div>
      </div>
    </section>
  );
}
