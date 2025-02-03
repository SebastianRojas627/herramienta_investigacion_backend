import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { SearchService } from './search.service';
import { AuthGuard } from '@nestjs/passport';
import { SearchSegipDto } from 'src/segip/dto/search-segip.dto';
import { SearchItvDto } from 'src/itv/dto/search-itv.dto';
import { SearchByOwnerDto } from 'src/itv/dto/search-by-owner.dto';
import { GetUser } from 'src/auth/decorators';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post('segip')
  @UseGuards(AuthGuard())
  searchSegip(@Body() searchSegipDto: SearchSegipDto) {
    return this.searchService.searchSegip(searchSegipDto);
  }

  @Post('segipo')
  @UseGuards(AuthGuard())
  searchSegipOne(
    @GetUser('id') id: string,
    @Body() searchSegipDto: SearchSegipDto,
  ) {
    return this.searchService.searchSegipOne(id, searchSegipDto);
  }

  @Post('itv')
  @UseGuards(AuthGuard())
  searchItv(@Body() searchItvDto: SearchItvDto) {
    return this.searchService.searchItv(searchItvDto);
  }

  @Post('itvo')
  @UseGuards(AuthGuard())
  searchItvOne(@GetUser('id') id: string, @Body() searchItvDto: SearchItvDto) {
    return this.searchService.searchItvOne(id, searchItvDto);
  }

  @Post('vehiculos')
  @UseGuards(AuthGuard())
  searchVehiculosByOwner(@Body() searchByOwnerDto: SearchByOwnerDto) {
    return this.searchService.searchVehiculosByOwner(searchByOwnerDto);
  }

  @Post('owners')
  @UseGuards(AuthGuard())
  searchPersonasByVehiculo(@Body() searchItvDto: SearchItvDto) {
    return this.searchService.searchPersonasByVehiculo(searchItvDto);
  }
}
