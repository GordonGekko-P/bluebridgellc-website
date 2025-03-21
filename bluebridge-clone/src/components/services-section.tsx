import Image from 'next/image';

const serviceImages = [
  "https://ext.same-assets.com/1325032747/2748256257.jpeg",
  "https://ext.same-assets.com/1325032747/2895076523.jpeg",
  "https://ext.same-assets.com/1325032747/1138437197.jpeg",
  "https://ext.same-assets.com/1325032747/3925872708.jpeg",
  "https://ext.same-assets.com/1325032747/525342505.jpeg",
  "https://ext.same-assets.com/1325032747/189334686.jpeg",
  "https://ext.same-assets.com/1325032747/1842836032.jpeg",
  "https://ext.same-assets.com/1325032747/1801926197.jpeg",
  "https://ext.same-assets.com/1325032747/3364536761.jpeg",
  "https://ext.same-assets.com/1325032747/2451119604.jpeg",
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-gray-600">Comprehensive migration solutions</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
          {serviceImages.map((img, index) => (
            <div
              key={index}
              className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Image
                src={img}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
