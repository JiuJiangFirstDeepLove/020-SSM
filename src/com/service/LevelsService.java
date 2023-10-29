package com.service;
import java.util.List;
import org.springframework.stereotype.Service;
import com.entity.Levels;
@Service("levelsService")
public interface LevelsService {
	// 插入数据 调用levelsDAO里的insertLevels配置
	public int insertLevels(Levels levels);

	// 更新数据 调用levelsDAO里的updateLevels配置
	public int updateLevels(Levels levels);

	// 删除数据 调用levelsDAO里的deleteLevels配置
	public int deleteLevels(String levelsid);

	// 查询全部数据 调用levelsDAO里的getAllLevels配置
	public List<Levels> getAllLevels();

	// 按照Levels类里面的字段名称精确查询 调用levelsDAO里的getLevelsByCond配置
	public List<Levels> getLevelsByCond(Levels levels);

	// 按照Levels类里面的字段名称模糊查询 调用levelsDAO里的getLevelsByLike配置
	public List<Levels> getLevelsByLike(Levels levels);

	// 按主键查询表返回单一的Levels实例 调用levelsDAO里的getLevelsById配置
	public Levels getLevelsById(String levelsid);

}

