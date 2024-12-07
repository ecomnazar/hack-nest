import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTreeDto {
  @IsNumber()
  @IsNotEmpty()
  locationId: number;

  @IsNumber()
  @IsNotEmpty()
  nameId: number;

  @IsNumber()
  @IsNotEmpty()
  row: number;

  @IsNumber()
  @IsNotEmpty()
  column: number;

  imgUrl: string;
  species: string;
  age: number;
  lastWatered: Date;
  wateringFreq: number;
  pestResistance: boolean;
  diseaseResistance: boolean;
  sunlight: string;
  temperature: number;
  humidity: number;
  lastHarvest: Date;
  harvestQty: number;
  lastTreated: Date;
}

// location   Location @relation(fields: [locationId], references: [id])
// locationId Int

// name   Name @relation(fields: [nameId], references: [id])
// nameId Int

// imgUrl  String
// species String // Тип дерева, например "Яблоня", "Дуб"
// age     Int // Возраст дерева (в годах)

// lastWatered  DateTime // Дата последнего полива
// wateringFreq Int // Частота полива (например, раз в 7 дней)

// pestResistance    Boolean // Устойчивость к вредителям
// diseaseResistance Boolean // Устойчивость к болезням

// sunlight    String // Требования к освещению (например, "Полное солнце", "Полутень")
// temperature Float // Идеальная температура (например, в градусах Цельсия)
// humidity    Float // Идеальный уровень влажности

// lastHarvest DateTime? // Дата последнего сбора урожая
// harvestQty  Float? // Количество собранного урожая (например, в кг)

// lastTreated DateTime? // Дата последней обработки от болезней
