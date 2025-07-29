# Frontend

## Para añadir un componente que necesite data del backend, haz lo siguiente:

```
ng generate component components/component-name
ng generate service services/component-name/component-name-service
```

### Que el service extienda ApiService
Override constructor para definir url

> component-name-service.ts
```typescript
import { Injectable } from '@angular/core';
import { ApiService } from '../api-service';

@Injectable({
  providedIn: 'root'
})
export class ComponentNameService extends ApiService{
  constructor() {
    super();
    this.url = '/api/path/to/api/url'
  } 
}
```

### Que el componente extienda ApiDirective<T>
Pasar el servicio del componente al constructor super

> component-name.ts
```typescript
import { Component } from '@angular/core';
import { ApiDirective } from '../../directives/api-directive';
import { ComponentNameService } from '../../services/component-name/component-name-service';

@Component({
  selector: 'app-component-name',
  imports: [],
  templateUrl: './component-name.html',
  styleUrl: './component-name.css',
})
export class ComponentName extends ApiDirective<any> {
  constructor(service: ComponentNameService) {
    super(service);
  }
}
```
