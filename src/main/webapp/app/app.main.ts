import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { Swagger2MarkupAppModule } from './app.module';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(Swagger2MarkupAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
