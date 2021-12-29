package com.ensias.tweet.service.mapper;

import com.ensias.tweet.domain.Tweet;
import com.ensias.tweet.service.dto.TweetDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Tweet} and its DTO {@link TweetDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface TweetMapper extends EntityMapper<TweetDTO, Tweet> {}
