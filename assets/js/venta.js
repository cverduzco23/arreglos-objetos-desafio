const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: '4 habitaciones',
        baños: '4 baños',
        costo: '5.000',
        smoke: false,
        pets: false,
    },

    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: '2 habitaciones',
        baños: '1 baños',
        costo: '1.200',
        smoke: true,
        pets: true,
    },

    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: '3 habitaciones',
        baños: '3 baños',
        costo: '4.500',
        smoke: false,
        pets: true,
    },

    {
        nombre: 'Casa a la orilla del lago',
        src: 'assets/img/casa-en-lago.webp',
        descripcion: 'Esta cómoda casa ofrece una vista increíble al valle y lago.',
        ubicacion: '23 Lake Avenue, Georgia, CA 76139',
        habitaciones: '6 habitaciones',
        baños: '3 baños',
        costo: '6.500',
        smoke: true,
        pets: true,
    },
];

const dynamicContentSoloVenta = document.querySelector("#dynamic-content-solo-venta");

for (let propiedad of propiedades_venta) {
  let textoFumar;
  if (propiedad.smoke) {
    textoFumar = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
  } else {
    textoFumar = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>';
  }
  let textoMascotas;
  if (propiedad.pets) {
    textoMascotas = '<p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas </p>';
  } else {
    textoMascotas = '<p class="text-danger"> <i class="fa-solid fa-ban"></i> No se permiten mascotas </p>';
  }
  dynamicContentSoloVenta.innerHTML +=
          `<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen de la propiedad ${propiedad.nombre}"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                  <i class="fas fa-bath"></i> ${propiedad.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                ${textoFumar}
                ${textoMascotas}
              </div>
            </div>
          </div>`
}