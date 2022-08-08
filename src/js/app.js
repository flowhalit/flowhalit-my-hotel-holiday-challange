(function () {
  const LoadedData={
    Items:[],
    index:0
  }
  const _LoadData = [];
  const htmlWrapper = $(".hotel-wrapper");
  const appandToData = function (item) {
    htmlWrapper.append(
    `<article>
        <div class="panel panel-default"> 
            <div class="panel-heading">
                <h2>
                    <a href="${item.url}" title="${item.hotelName}" target="_blank" data-decid="${item.hotelName}">
                        ${item.hotelName}
                    </a>
                </h2>
                <a href="${item.url}" target="_blank">
                    <div class="${item.customersPointCssName} position-relative">
                        <div class="score__left">
                            <div class="title">${item.customersPointText}</div>
                            <div class="desc">${item.reviewCount} Değerlendirme</div>
                        </div>
                        <div class="score__right">${item.customerScore} </div>
                    </div>
                </a>
            </div>
            <div class="panel-body">
                <div class="">
                    <div class="col-lg-4 col-md-3 col-sm-4 col-xs-12 img-mask">
                        <a href="${item.url}" target="_blank">
                        <img width="257" height="171" data-src="${item.photoPath}"  title="${item.hotelName}" alt="${item.hotelName}" class="img-responsive lazy-loaded-image lozad" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==" />
                        </a>
                        <div class="badge-list badge-list--top-right badge-list--bottom-right-mobile"> </div>
                        <div class="badge-list badge-list--bottom-left" data-magic="False">
                            <div class="badge-list__item badge-list__item--payathotel" data-toggle="tooltip" data-placement="top" title="" data-original-title="%25 Ön Ödeme Yaparak Rezervasyonunuzu Tamamlayabilirsiniz">
                                <span>Ön Ödeme Fırsatı</span>
                            </div>
                            <div class="badge-list__item badge-list__item--covid" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sağlıklı Turizm Sertifikalı">
                                <span>Sağlık Sertifikalı</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6 col-sm-5 col-xs-6 otel-item-content">
                        <p> <i class="fa fa-map-marker" aria-hidden="true"></i>${item.areaName} - ${item.subAreaName} ${(item.subAreaDetailName?"| "+ item.subAreaDetailName:"")}</p>
                        <p class="erk-promo">${item.campaignName}</p>
                        <div class="free-cancellation-info" data-toggle="tooltip" data-placement="top" title="" data-original-title="Girişte Öde ile rezervasyon yaparak giriş gününe 72 saat kalaya kadar ücretsiz koşulsuz iptal fırsatından yararlanabilirsiniz.">
                            <img src="./assets/images/room-card-info-icon.svg" width="14" height="14" alt="Ücretsiz İptal" />
                            Ücretsiz İptal
                        </div>
                        <div class="hotelFeatures">
                            <ul class="hotelFeaturesList">${item.hotelPropertyList.map(hotel_property=>'<li class="hotelFeaturesList__hotelFeaturesTooltip '+hotel_property.code+'"><i class="hotelFeaturesTooltip-icon"></i>'+hotel_property.name +"</li>").join("")}</ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 otel-list__price-box">
                        <div class="otel-list__price-box__content">
                            <p class="hostel-type">${item.accommodation}</p>
                            <p class="currency">${item.price}<small class="price-currency">${item.currency}</small></p>
                            <p class="discount-price">${parseFloat(item.discountPrice.toString().match(/^\d+(?:\.\d{0,2})?/)) }<small class="price-currency">${ item.currency}</small></p>
                            <a href="${item.url} target="_blank" class="btn btn-block btn-primary">Detayları İncele</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>`
    );
   
  };
  const LoadData = new Proxy(_LoadData, {
    get(target, prop) {
      const val = target[prop];
      if (typeof val === "function") {
        if (["push", "unshift"].includes(prop)) {
          return function (el) {
            appandToData(el, prop);
            return Array.prototype[prop].apply(target, arguments);
          };
        }
        if (["pop"].includes(prop)) {
          return function () {
            const el = Array.prototype[prop].apply(target, arguments);
            return el;
          };
        }
        return val.bind(target);
      }
      return val;
    },
  });
  $.getJSON("/api/hotels.json", function (data) {
    LoadedData.Items=data;
    LoadedData.Items.forEach((item) => LoadData.push(item));
  }).done(function (data) {
    const observer = lozad(".lozad", {
      load: function (el) {
        el.src = el.getAttribute("data-src");
        // el.classList.toggle("no-src",false)
        
        },
        });
        observer.observe();
    });
})();

