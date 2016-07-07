var SimulationRenderer=function(a,b,c,d){var e,f,g,h,i,j,k,l=a,m=d,n=[],o=function(){var b=a.context;return null===b.getExtension("OES_texture_float")?(console.error("SimulationRenderer: OES_texture_float not supported."),!1):0===b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS)?(console.error("SimulationRenderer: Vertex shader textures not supported."),!1):!0},p=function(a){var b=new THREE.WebGLRenderTarget(a,a,{minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,format:THREE.RGBAFormat,type:THREE.FloatType,depthBuffer:!1,stencilBuffer:!1});return b.generateMipmaps=!1,b},q=function(){for(var a=0;a<n.length;a++)n[a].value=h};this.update=function(a,b){i.material.uniforms.uDeltaT.value=a,i.material.uniforms.uTime.value=b,1===k?(i.material.uniforms.tPrev.value=f,i.material.uniforms.tCurr.value=g,i.render(l,e),h=e):2===k?(i.material.uniforms.tPrev.value=g,i.material.uniforms.tCurr.value=e,i.render(l,f),h=f):3===k?(i.material.uniforms.tPrev.value=e,i.material.uniforms.tCurr.value=f,i.render(l,g),h=g):console.error("SimulationRenderer: something's wrong!"),q(),k++,k>3&&(k=1)},this.registerUniform=function(a){n.push(a),a.value=h},this.reset=function(){j.render(l,e),j.render(l,f),j.render(l,g)},o(),e=p(m),f=p(m),g=p(m),e.name="SimulationRenderer._target1",f.name="SimulationRenderer._target2",g.name="SimulationRenderer._target3",k=1,h=e,i=new ShaderPass(b),j=new ShaderPass(c),this.reset()};SimulationRenderer.prototype.constructor=SimulationRenderer;