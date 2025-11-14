module.exports = [
"[project]/components/TechGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TechGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function TechGrid() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', {
            alpha: true,
            desynchronized: true
        });
        if (!ctx) return;
        const resizeCanvas = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        const nodes = [];
        const energyParticles = [];
        const nodeCount = 60;
        const activationRadius = 200;
        const connectionDistance = 180;
        // Create nodes with depth for parallax
        for(let i = 0; i < nodeCount; i++){
            const depth = Math.random() * 0.7 + 0.3;
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                baseY: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                depth,
                active: false,
                activationLevel: 0
            });
        }
        let mouseX = -1000;
        let mouseY = -1000;
        let scrollY = 0;
        let targetScrollY = 0;
        const handleMouseMove = (e)=>{
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        const handleScroll = ()=>{
            targetScrollY = window.scrollY;
        };
        window.addEventListener('mousemove', handleMouseMove, {
            passive: true
        });
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        const createEnergyParticle = (from, to)=>{
            energyParticles.push({
                x: from.x,
                y: from.y,
                targetX: to.x,
                targetY: to.y,
                progress: 0,
                speed: 0.03 + Math.random() * 0.03,
                fromNode: from,
                toNode: to
            });
        };
        const drawNode = (node, currentY)=>{
            const baseSize = 2.5 * node.depth // Smaller base size
            ;
            const size = baseSize + node.activationLevel * 3;
            // Lighter outer glow
            const outerGradient = ctx.createRadialGradient(node.x, currentY, 0, node.x, currentY, size * 3.5);
            outerGradient.addColorStop(0, `rgba(96, 165, 250, ${node.activationLevel * 0.4})`);
            outerGradient.addColorStop(0.5, `rgba(96, 165, 250, ${node.activationLevel * 0.2})`);
            outerGradient.addColorStop(1, 'rgba(96, 165, 250, 0)');
            ctx.fillStyle = outerGradient;
            ctx.beginPath();
            ctx.arc(node.x, currentY, size * 3.5, 0, Math.PI * 2);
            ctx.fill();
            // Core
            ctx.fillStyle = node.active ? `rgba(96, 165, 250, ${0.5 + node.activationLevel * 0.3})` : `rgba(96, 165, 250, ${0.15 * node.depth})`;
            ctx.beginPath();
            ctx.arc(node.x, currentY, size, 0, Math.PI * 2);
            ctx.fill();
            // Bright center
            if (node.active) {
                ctx.fillStyle = `rgba(255, 255, 255, ${node.activationLevel * 0.6})`;
                ctx.beginPath();
                ctx.arc(node.x, currentY, size * 0.4, 0, Math.PI * 2);
                ctx.fill();
            }
        };
        const drawConnection = (from, to, fromY, toY)=>{
            const opacity = Math.max(from.activationLevel, to.activationLevel);
            if (opacity < 0.1) return;
            const gradient = ctx.createLinearGradient(from.x, fromY, to.x, toY);
            gradient.addColorStop(0, `rgba(96, 165, 250, ${opacity * 0.3})`);
            gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.4})`);
            gradient.addColorStop(1, `rgba(96, 165, 250, ${opacity * 0.3})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1 + opacity * 1;
            ctx.shadowColor = 'rgba(96, 165, 250, 0.6)';
            ctx.shadowBlur = opacity * 6;
            ctx.beginPath();
            ctx.moveTo(from.x, fromY);
            ctx.lineTo(to.x, toY);
            ctx.stroke();
            ctx.shadowBlur = 0;
        };
        const drawEnergyParticle = (particle)=>{
            // Update position along the line
            particle.progress += particle.speed;
            if (particle.progress >= 1) {
                const index = energyParticles.indexOf(particle);
                energyParticles.splice(index, 1);
                return;
            }
            const x = particle.fromNode.x + (particle.toNode.x - particle.fromNode.x) * particle.progress;
            const fromY = particle.fromNode.y;
            const toY = particle.toNode.y;
            const y = fromY + (toY - fromY) * particle.progress;
            // Lighter glowing particle
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, 6);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
            gradient.addColorStop(0.3, 'rgba(96, 165, 250, 0.7)');
            gradient.addColorStop(0.6, 'rgba(59, 130, 246, 0.4)');
            gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, Math.PI * 2);
            ctx.fill();
            // Lighter particle trail
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.4 * (1 - particle.progress)})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particle.fromNode.x, fromY);
            ctx.lineTo(x, y);
            ctx.stroke();
        };
        const animate = ()=>{
            scrollY += (targetScrollY - scrollY) * 0.08;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Update nodes
            nodes.forEach((node)=>{
                // Parallax with scroll
                const parallaxOffset = scrollY * node.depth * 0.08;
                node.y = node.baseY + parallaxOffset;
                // Wrap around
                if (node.y > canvas.height + 50) {
                    node.y = -50;
                    node.baseY = node.y - parallaxOffset;
                } else if (node.y < -50) {
                    node.y = canvas.height + 50;
                    node.baseY = node.y - parallaxOffset;
                }
                // Gentle drift
                node.x += node.vx * node.depth;
                node.baseY += node.vy * node.depth;
                // Bounce off edges
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.baseY < 0 || node.baseY > canvas.height) node.vy *= -1;
                // Check cursor proximity
                const dx = mouseX - node.x;
                const dy = mouseY - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < activationRadius) {
                    node.active = true;
                    node.activationLevel += (1 - node.activationLevel) * 0.15; // Faster activation
                } else {
                    node.activationLevel *= 0.85; // Faster fade (was 0.95)
                    if (node.activationLevel < 0.05) {
                        node.active = false;
                        node.activationLevel = 0;
                    }
                }
            });
            // Draw connections and create energy particles
            for(let i = 0; i < nodes.length; i++){
                const nodeA = nodes[i];
                for(let j = i + 1; j < nodes.length; j++){
                    const nodeB = nodes[j];
                    const dx = nodeA.x - nodeB.x;
                    const dy = nodeA.y - nodeB.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < connectionDistance) {
                        drawConnection(nodeA, nodeB, nodeA.y, nodeB.y);
                        // Create energy particles when both nodes are active
                        if (nodeA.active && nodeB.active && Math.random() < 0.02) {
                            createEnergyParticle(nodeA, nodeB);
                        }
                    }
                }
            }
            // Draw energy particles
            energyParticles.forEach((particle)=>drawEnergyParticle(particle));
            // Draw nodes on top
            nodes.forEach((node)=>drawNode(node, node.y));
            requestAnimationFrame(animate);
        };
        animate();
        return ()=>{
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-0",
        style: {
            opacity: 0.75
        }
    }, void 0, false, {
        fileName: "[project]/components/TechGrid.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_TechGrid_tsx_cf988042._.js.map