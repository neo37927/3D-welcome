var UVMapAnimator=function(a,b){var c,d=this,e=new UVMapper(a);this.target=e.createTarget(b),this.update=function(a,b){c&&(c.updateAnimation(1e3*a),e.render(c,d.target))},this.setMesh=function(a){c=a}};