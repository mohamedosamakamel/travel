import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ItineraryService } from './itinerary.service';
import { CreateItineraryDto } from './dto/create-itinerary.dto';
import { UpdateItineraryDto } from './dto/update-itinerary.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ItineraryDocument } from './entities/itinerary.entity';
import { FilterQueryOptionsItinerary } from './dto/filterQueryOptions.dto';
import { PaginateResult } from 'mongoose';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('itinerary')
@ApiTags('itinerary')
@ApiBearerAuth()
export class ItineraryController {
  constructor(private readonly itineraryService: ItineraryService) {}

  @Post()
  async create(
    @Body() createItineraryDto: CreateItineraryDto,
  ): Promise<ItineraryDocument> {
    return await this.itineraryService.create(createItineraryDto);
  }

  @Public()
  @Get()
  async findAll(
    @Query() queryFiltersAndOptions: FilterQueryOptionsItinerary,
  ): Promise<PaginateResult<ItineraryDocument> | ItineraryDocument[]> {
    return await this.itineraryService.findAll(queryFiltersAndOptions);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ItineraryDocument> {
    return this.itineraryService.findOne(id);
  }



  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateItineraryDto: UpdateItineraryDto,
  ) {
    return this.itineraryService.update(id, updateItineraryDto);
  }


  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itineraryService.remove(id);
  }
}
