import { useEffect, useRef } from 'react';

export const useMagneticEffect = (strength: number = 40) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handlePointerMove = (e: PointerEvent) => {
            const { clientX, clientY } = e;
            const elementRect = element.getBoundingClientRect();

            const elementX = elementRect.left + elementRect.width / 2;
            const elementY = elementRect.top + elementRect.height / 2;

            const deltaX = clientX - elementX;
            const deltaY = clientY - elementY;

            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const maxDistance = 100; // Maximum distance for the effect

            if (distance < maxDistance) {
                const scale = (maxDistance - distance) / maxDistance;
                const moveX = (deltaX * strength * scale) / maxDistance;
                const moveY = (deltaY * strength * scale) / maxDistance;

                element.style.transform = `translate(${moveX}px, ${moveY}px)`;
            } else {
                element.style.transform = 'translate(0, 0)';
            }
        };

        const handlePointerLeave = () => {
            element.style.transform = 'translate(0, 0)';
        };

        element.addEventListener('pointermove', handlePointerMove);
        element.addEventListener('pointerleave', handlePointerLeave);

        return () => {
            element.removeEventListener('pointermove', handlePointerMove);
            element.removeEventListener('pointerleave', handlePointerLeave);
        };
    }, [strength]);

    return ref;
};