import React, { useState } from 'react';
import Card from '../atoms/Card';

interface GalleryProps {
  items: {
    id: string;
    src: string;
    alt: string;
    title?: string;
  }[];
  columns?: 2 | 3 | 4;
}

const Gallery: React.FC<GalleryProps> = ({ items, columns = 3 }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const gridClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  const selected = items.find((item) => item.id === selectedId);

  return (
    <div>
      <div className={`grid ${gridClass} gap-4 mb-8`}>
        {items.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer overflow-hidden rounded-lg hover:shadow-lg transition-shadow"
            onClick={() => setSelectedId(item.id)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
            />
            {item.title && (
              <div className="p-3 bg-base-100">
                <p className="font-semibold text-sm">{item.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-w-2xl max-h-96"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;